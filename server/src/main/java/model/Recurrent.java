package model;

import java.time.LocalDate;

enum TimeType { day, week, month, year; }

class Recurrent {
  private int id;
  private String title;
  private float value;
  private String period;
  private TimeType type;
  private LocalDate startDate;
  private LocalDate endDate;
  private LocalDate updatedAt;
  private LocalDate createdAt; // server-only
  private int userId;
  private int categoryId; // optional
}
