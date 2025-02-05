public class Expense
{
  public int Id { get; set; }
  public string Description { get; set; }
  public double Amount { get; set; }
  public DateTime Date { get; set; }
  public string Category { get; set; }

  public Expense(int id, string description, double amount, DateTime date, string category)
  {
    Id = id;
    Description = description;
    Amount = amount;
    Date = date;
    Category = category;
  }
}