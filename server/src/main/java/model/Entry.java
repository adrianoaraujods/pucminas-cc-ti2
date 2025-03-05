package model;

import java.time.LocalDate;

class Entry {
  private int id;
  private String title;
  private float value;
  private LocalDate date;
  private LocalDate updatedAt;
  private LocalDate createdAt; // server-only
  private int userId;
  private int categoryId; // optional
  private int recurrentId; // optional
}
