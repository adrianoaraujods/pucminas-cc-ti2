package model;

import java.time.LocalDate;

class Wallet {
  private int id;
  private String name;
  private LocalDate updatedAt;
  private LocalDate createdAt; // server-only

  private int userId;
  private int[] entries;
  private int[] recurring;
}
