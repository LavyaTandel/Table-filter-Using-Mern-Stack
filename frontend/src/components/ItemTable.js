import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ItemTable = () => {
  const [items, setItems] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    // Fetch the items from the backend when the component is mounted
    const fetchItems = async () => {
      const result = await axios.get('http://localhost:5000/api/items');
      setItems(result.data);
    };
    fetchItems();
  }, []);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredItems = items.filter(item =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search items"
        value={searchQuery}
        onChange={handleSearchChange}
      />
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {filteredItems.map(item => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ItemTable;
