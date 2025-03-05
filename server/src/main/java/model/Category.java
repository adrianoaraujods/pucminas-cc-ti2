package model;

import java.time.LocalDate;

class Category {
  private int id;
  private String title;
  private String icon;
  private LocalDate updatedAt;
  private LocalDate createdAt; // server-only
  private int userId;
}
