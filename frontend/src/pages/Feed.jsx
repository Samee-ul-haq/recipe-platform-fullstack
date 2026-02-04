import { useEffect, useState } from 'react';
import api from '../api';

function Feed() {
  const [recipes, setRecipes] = useState([]);

  // 1. Fetch Data on Load
  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await api.get('/recipes');
        setRecipes(response.data);
      } catch (error) {
        console.error("Error fetching recipes:", error);
      }
    };

    fetchRecipes();
  }, []);
  
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>🍲 Community Recipes</h1>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '20px' }}>
        
        {recipes.map((recipe) => (
          <div key={recipe.id} style={{ border: '1px solid #ddd', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }}>
            
            {/* IMAGE HANDLING */}
            {recipe.image_url && (
              <img 
                // We must add the backend URL because the DB only stores '/uploads/file.jpg'
               src={`http://localhost:3000${recipe.image_url.replace(/\\/g, "/").replace("src","")}`}
                alt={recipe.title}
                style={{ width: '100%', height: '200px', objectFit: 'cover' }} 
              />
            )}

            <div style={{ padding: '15px' }}>
              <h3>{recipe.title}</h3>
              <p style={{ color: '#555' }}>{recipe.description}</p>
              <small>Chef ID: {recipe.user_id}</small>
            </div>
          </div>
        ))}

      </div>
    </div>
  );
}

export default Feed;