export default async function handler(req, res) {
  try {
    const stmt = db.prepare(`
      SELECT id, category_name
      FROM product_categories
      WHERE isActive = 1
        AND deletedAt IS NULL
      ORDER BY category_name ASC
    `);

    const rows = await stmt.all();

    const categories = rows.map(row => ({
      id: row.id,
      name: row.category_name,
    }));

    res.status(200).json(categories);
  } catch (err) {
    console.error("Categories API error:", err);
    res.status(500).json([]);
  }
}
