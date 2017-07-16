package com.study.bean;

/**
 * ClassName   :GreetingBean.
 * Description :
 *
 * @author shihuibo
 * @since 2017-07-16 11:29
 */
public class GreetingBean {

  private long id;
  private String name;

  public GreetingBean(long id, String name) {
    this.id = id;
    this.name = name;
  }

  public long getId() {
    return id;
  }

  public String getName() {
    return name;
  }
}
