var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAllOrigins", builder => {
                  builder.AllowAnyOrigin()
                  .AllowAnyMethod()
                  .AllowAnyHeader();
        });
});

// Add services to the container.
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

// Use CORS policy
app.UseCors("AllowAllOrigins");

var mockExpenses = new List<Expense>
{
 new (1, "Groceries", 50.75, DateTime.Now, "Food"),
 new (2, "Electricity Bill", 30.00, DateTime.Now, "Utilities"),
 new (3, "Internet Bill", 25.00, DateTime.Now, "Utilities"),
 new (4, "Dinner at Restaurant", 45.00, DateTime.Now, "Food"),
 new (5, "Movie Tickets", 20.00, DateTime.Now, "Entertainment"),
 new (6, "Gas", 40.00, DateTime.Now, "Transport"),
 new (7, "Coffee", 5.00, DateTime.Now, "Food"),
 new (8, "Gym Membership", 35.00, DateTime.Now, "Health"),
 new (9, "Books", 15.00, DateTime.Now, "Education"),
 new (10, "Lunch", 12.00, DateTime.Now, "Food"),
 new (11, "Taxi", 25.00, DateTime.Now, "Transport"),
 new (12, "Subscription", 10.00, DateTime.Now, "Entertainment"),
 new (13, "Gift", 50.00, DateTime.Now, "Miscellaneous"),
 new (14, "Clothes", 75.00, DateTime.Now, "Shopping"),
 new (15, "Dinner", 60.00, DateTime.Now, "Food"),
 new (16, "Parking", 5.00, DateTime.Now, "Transport"),
 new (17, "Snacks", 8.00, DateTime.Now, "Food"),
 new (18, "Haircut", 20.00, DateTime.Now, "Personal Care"),
 new (19, "Concert Tickets", 100.00, DateTime.Now, "Entertainment"),
 new (20, "Pet Food", 30.00, DateTime.Now, "Pets"),
 new (21, "Water Bill", 15.00, DateTime.Now, "Utilities"),
 new (22, "Phone Bill", 40.00, DateTime.Now, "Utilities"),
 new (23, "Groceries", 60.00, DateTime.Now, "Food"),
 new (24, "Dinner", 55.00, DateTime.Now, "Food"),
 new (25, "Lunch", 18.00, DateTime.Now, "Food"),
 new (26, "Taxi", 22.00, DateTime.Now, "Transport"),
 new (27, "Subscription", 12.00, DateTime.Now, "Entertainment"),
 new (28, "Groceries", 45.00, DateTime.Now, "Food"),
 new (29, "Electricity Bill", 35.00, DateTime.Now, "Utilities"),
 new (30, "Internet Bill", 28.00, DateTime.Now, "Utilities"),
 new (31, "Dinner at Restaurant", 50.00, DateTime.Now, "Food"),
 new (32, "Movie Tickets", 22.00, DateTime.Now, "Entertainment"),
 new (33, "Gas", 42.00, DateTime.Now, "Transport"),
 new (34, "Coffee", 6.00, DateTime.Now, "Food"),
 new (35, "Gym Membership", 40.00, DateTime.Now, "Health"),
 new (36, "Books", 20.00, DateTime.Now, "Education"),
 new (37, "Lunch", 15.00, DateTime.Now, "Food"),
 new (38, "Taxi", 27.00, DateTime.Now, "Transport"),
 new (39, "Subscription", 15.00, DateTime.Now, "Entertainment"),
 new (40, "Gift", 55.00, DateTime.Now, "Miscellaneous"),
 new (41, "Clothes", 80.00, DateTime.Now, "Shopping"),
 new (42, "Dinner", 65.00, DateTime.Now, "Food"),
 new (43, "Parking", 6.00, DateTime.Now, "Transport"),
 new (44, "Snacks", 9.00, DateTime.Now, "Food"),
 new (45, "Haircut", 22.00, DateTime.Now, "Personal Care"),
 new (46, "Concert Tickets", 105.00, DateTime.Now, "Entertainment"),
 new (47, "Pet Food", 32.00, DateTime.Now, "Pets")
};

app.MapGet("/expense", () => mockExpenses)
  .WithName("GetExpense")
  .WithOpenApi();

app.MapPost("/expense", (Expense expense) =>
  {
    mockExpenses.Add(expense);
  })
  .WithName("AddExpense")
  .WithOpenApi();

app.MapPatch("/expense/{id}", (int id, Expense expense) =>
{
  var existingExpense = mockExpenses.FirstOrDefault(e => e.Id == id);
  if (existingExpense != null)
  {
    var updatedExpense = existingExpense with
    {
      Description = expense.Description,
      Amount = expense.Amount,
      Date = expense.Date,
      Category = expense.Category
    };
    mockExpenses[mockExpenses.IndexOf(existingExpense)] = updatedExpense;
  }
});

app.MapDelete("/expense/{id}", (int id) =>
{
  var expense = mockExpenses.FirstOrDefault(e => e.Id == id);
  if (expense != null)
  {
    mockExpenses.Remove(expense);
    Console.WriteLine($"{id} is deleted!");
  }
});



app.Run();

public record Expense(int Id, string Description, double Amount, DateTime Date, string Category);
