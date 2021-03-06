-- Multi-Table Query Practice

-- Display the ProductName and CategoryName for all products in the database. Shows 77 records.
select product.ProductName, category.CategoryName
from product
join category on product.CategoryId = category.Id

-- Display the order Id and shipper CompanyName for all orders placed before August 9 2012. Shows 429 records.
select [order].id, shipper.CompanyName 
from [order]
join shipper on [order].ShipVia = shipper.Id
where orderdate < '2012-08-09'
-- Display the name and quantity of the products ordered in order with Id 10251. Sort by ProductName. Shows 3 records.
select product.ProductName, orderdetail.Quantity
from orderdetail
join product on orderdetail.ProductId = product.Id
where orderid = '10251'
-- Display the OrderID, Customer's Company Name and the employee's LastName for every order. All columns should be labeled clearly. Displays 16,789 records.
select [order].id, customer.CompanyName, employee.LastName
from [order]
join customer on [order].CustomerId = customer.Id
join employee on [order].EmployeeId = employee.Id