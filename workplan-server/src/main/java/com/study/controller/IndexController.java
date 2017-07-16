package com.study.controller;

import com.study.bean.GreetingBean;
import java.util.concurrent.atomic.AtomicLong;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

/**
 * ClassName   :IndexController.
 * Description :
 *
 * @author shihuibo
 * @since 2017-07-16 11:28
 */
@RestController
public class IndexController {

  private static final String template = "Hello, %s";
  private final AtomicLong counter = new AtomicLong();

  @RequestMapping("/")
  public GreetingBean greeting(@RequestParam(value = "name", defaultValue = "World") String name) {
    return new GreetingBean(counter.incrementAndGet(), String.format(template, name));
  }
}
