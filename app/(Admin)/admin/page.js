"use client";
import React, { useEffect, useState } from "react";

const AdminPage = () => {
  const [foods, setFoods] = useState([]);
  const [editIdx, setEditIdx] = useState(null);
  const [editFood, setEditFood] = useState({});

  useEffect(() => {
    const storedFoods = JSON.parse(localStorage.getItem("foods") || "[]");
    setFoods(storedFoods);
  }, []);

  const handleDelete = (idx) => {
    const updated = foods.filter((_, i) => i !== idx);
    setFoods(updated);
    localStorage.setItem("foods", JSON.stringify(updated));
  };

  const handleEdit = (idx) => {
    setEditIdx(idx);
    setEditFood({ ...foods[idx] });
  };

  const handleEditChange = (e) => {
    setEditFood({ ...editFood, [e.target.name]: e.target.value });
  };

  const handleEditSave = () => {
    const updated = foods.map((item, idx) =>
      idx === editIdx ? { ...editFood, price: Number(editFood.price), rating: Number(editFood.rating) } : item
    );
    setFoods(updated);
    localStorage.setItem("foods", JSON.stringify(updated));
    setEditIdx(null);
    setEditFood({});
  };

  return (
    <div style={{ padding: 40 }}>
      <h2 style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: 24 }}>Admin: Manage Foods</h2>
      <div style={{ overflowX: "auto" }}>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr style={{ background: "#f3f4f6" }}>
              <th style={{ padding: 8, border: "1px solid #ddd" }}>Image</th>
              <th style={{ padding: 8, border: "1px solid #ddd" }}>Name</th>
              <th style={{ padding: 8, border: "1px solid #ddd" }}>Categories</th>
              <th style={{ padding: 8, border: "1px solid #ddd" }}>Price</th>
              <th style={{ padding: 8, border: "1px solid #ddd" }}>Rating</th>
              <th style={{ padding: 8, border: "1px solid #ddd" }}>Delivery</th>
              <th style={{ padding: 8, border: "1px solid #ddd" }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {foods.map((food, idx) => (
              <tr key={idx}>
                <td style={{ padding: 8, border: "1px solid #ddd" }}>
                  <img src={food.imageURL} alt={food.name} style={{ width: 60, height: 40, objectFit: "cover", borderRadius: 6 }} />
                </td>
                <td style={{ padding: 8, border: "1px solid #ddd" }}>
                  {editIdx === idx ? (
                    <input name="name" value={editFood.name} onChange={handleEditChange} />
                  ) : (
                    food.name
                  )}
                </td>
                <td style={{ padding: 8, border: "1px solid #ddd" }}>
                  {editIdx === idx ? (
                    <input name="categories" value={editFood.categories} onChange={handleEditChange} />
                  ) : (
                    food.categories
                  )}
                </td>
                <td style={{ padding: 8, border: "1px solid #ddd" }}>
                  {editIdx === idx ? (
                    <input name="price" type="number" value={editFood.price} onChange={handleEditChange} />
                  ) : (
                    food.price
                  )}
                </td>
                <td style={{ padding: 8, border: "1px solid #ddd" }}>
                  {editIdx === idx ? (
                    <input name="rating" type="number" step="0.1" value={editFood.rating} onChange={handleEditChange} />
                  ) : (
                    food.rating
                  )}
                </td>
                <td style={{ padding: 8, border: "1px solid #ddd" }}>
                  {editIdx === idx ? (
                    <input name="deliveryDuration" value={editFood.deliveryDuration} onChange={handleEditChange} />
                  ) : (
                    food.deliveryDuration
                  )}
                </td>
                <td style={{ padding: 8, border: "1px solid #ddd" }}>
                  {editIdx === idx ? (
                    <>
                      <button onClick={handleEditSave} style={{ marginRight: 8, background: "#4ade80", color: "#fff", border: "none", borderRadius: 4, padding: "4px 10px" }}>Save</button>
                      <button onClick={() => setEditIdx(null)} style={{ background: "#ef4444", color: "#fff", border: "none", borderRadius: 4, padding: "4px 10px" }}>Cancel</button>
                    </>
                  ) : (
                    <>
                      <button onClick={() => handleEdit(idx)} style={{ marginRight: 8, background: "#2563eb", color: "#fff", border: "none", borderRadius: 4, padding: "4px 10px" }}>Edit</button>
                      <button onClick={() => handleDelete(idx)} style={{ background: "#ef4444", color: "#fff", border: "none", borderRadius: 4, padding: "4px 10px" }}>Delete</button>
                    </>
                  )}
                </td>
              </tr>
            ))}
            {foods.length === 0 && (
              <tr>
                <td colSpan={7} style={{ textAlign: "center", padding: 24 }}>No food items found.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminPage;
