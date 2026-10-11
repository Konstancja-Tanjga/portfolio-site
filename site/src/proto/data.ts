/** Fictional numbers for the prototype. They prove behaviour, not facts. */
export const CATEGORIES = ["Hardware", "Software", "Services", "Licences", "Training", "Support"];
export const REVENUE_2024 = [18.4, 12.9, 9.1, 7.6, 3.2, 5.8];
export const REVENUE_2025 = [19.2, 11.4, 8.7, 7.9, 2.9, 5.1];

export type Query = {
  id: string;
  name: string;
  source: "mssql" | "oracle" | "bigquery";
  fields: number;
  roles: string[];
  author: string;
  date: string;
  columns: { name: string; type: "STRING" | "FLOAT" | "INT" | "DATE" }[];
  sql: string;
};

export const QUERIES: Query[] = [
  {
    id: "q1",
    name: "Sales by product category",
    source: "mssql",
    fields: 18,
    roles: ["Administrator", "Moderator", "Users"],
    author: "Konstancja Tanjga",
    date: "12 Mar 2026",
    columns: [
      { name: "category", type: "STRING" },
      { name: "revenue", type: "FLOAT" },
      { name: "orders", type: "INT" },
      { name: "booking_date", type: "DATE" },
    ],
    sql: "SELECT category, SUM(revenue) AS revenue, COUNT(*) AS orders\nFROM sales\nWHERE booking_date BETWEEN '2024-01-01' AND '2025-11-30'\nGROUP BY category;",
  },
  {
    id: "q2",
    name: "Customers with region",
    source: "oracle",
    fields: 25,
    roles: ["Administrator", "Moderator"],
    author: "Ingo German",
    date: "3 Jun 2026",
    columns: [
      { name: "customer_id", type: "INT" },
      { name: "customer", type: "STRING" },
      { name: "region", type: "STRING" },
      { name: "credit_limit", type: "FLOAT" },
    ],
    sql: "SELECT customer_id, name AS customer, region, credit_limit\nFROM customers\nWHERE active = 1;",
  },
  {
    id: "q3",
    name: "Open orders",
    source: "bigquery",
    fields: 12,
    roles: ["Users"],
    author: "Konstancja Tanjga",
    date: "22 Sep 2026",
    columns: [
      { name: "order_id", type: "INT" },
      { name: "customer_id", type: "INT" },
      { name: "amount", type: "FLOAT" },
      { name: "due", type: "DATE" },
    ],
    sql: "SELECT order_id, customer_id, amount, due\nFROM orders\nWHERE status = 'open';",
  },
];

export const DASHBOARDS = [
  { id: "d1", name: "EMEA renewal pull-forward", domain: "Revenue", roles: ["Admin", "Controller"], date: "12 Mar 2026" },
  { id: "d2", name: "Churn, sales, customers 2025", domain: "Retention", roles: ["Controller"], date: "3 Jun 2026" },
  { id: "d3", name: "Warehouse insights and trends", domain: "Operations", roles: ["Admin", "Users"], date: "22 Sep 2026" },
];
