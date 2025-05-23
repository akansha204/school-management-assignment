const express = require('express');
const router = express.Router();
const db = require('../db');

// Helper: Haversine Formula to calculate distance
const calculateDistance = (lat1, lon1, lat2, lon2) => {
  const R = 6378; // Radius of Earth in km
  const toRad = val => val * Math.PI / 180;

  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lon2 - lon1);

  const a = Math.sin(dLat / 2) ** 2 +
            Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) *
            Math.sin(dLon / 2) ** 2;

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  return R * c;
};

// POST /addSchool
router.post('/addSchool', async (req, res) => {
  const { name, address, latitude, longitude } = req.body;

  if (!name || !address || isNaN(latitude) || isNaN(longitude)) {
    return res.status(400).json({ error: 'All fields are required and must be valid.' });
  }

  try {
    const query = `
      INSERT INTO schools (name, address, latitude, longitude)
      VALUES ($1, $2, $3, $4)
      RETURNING id
    `;
    const values = [name, address, latitude, longitude];

    const result = await db.query(query, values);
    res.status(201).json({ message: 'School added successfully.', schoolId: result.rows[0].id });
  } catch (err) {
    console.error('Insert Error:', err);
    res.status(500).json({ error: 'Database error.', details: err.message });
  }
});

// GET /listSchools
router.get('/listSchools', async (req, res) => {
  const userLat = parseFloat(req.query.latitude);
  const userLon = parseFloat(req.query.longitude);

  if (isNaN(userLat) || isNaN(userLon)) {
    return res.status(400).json({ error: 'Invalid latitude or longitude.' });
  }

  try {
    const result = await db.query('SELECT * FROM schools');

    const sortedSchools = result.rows
      .map(school => ({
        ...school,
        distance: calculateDistance(userLat, userLon, school.latitude, school.longitude)
      }))
      .sort((a, b) => a.distance - b.distance);

    res.json(sortedSchools);
  } catch (err) {
    console.error('Select Error:', err);
    res.status(500).json({ error: 'Database error.', details: err.message });
  }
});

module.exports = router;
