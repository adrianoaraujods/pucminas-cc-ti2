package model;

import java.time.LocalDate;

class User {
  private int id;
  private String name;
  private String email;
  private String password; // server-only
  private LocalDate updatedAt;
  private LocalDate createdAt; // server-only
  private int[] categories;
  private int[] entries;
  private int[] recurring;
}
