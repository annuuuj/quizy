import React, { useState, useEffect } from 'react';
import { User, LogOut, Mail, X } from 'lucide-react';
import '../styles/Profile.css';

const Profile = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // Function to get user initials
  const getUserInitials = (name) => {
    if (!name) return 'U';
    const nameParts = name.trim().split(' ');
    if (nameParts.length === 1) {
      return nameParts[0].substring(0, 2).toUpperCase();
    }
    return (nameParts[0].charAt(0) + nameParts[1].charAt(0)).toUpperCase();
  };

  // Fetch user profile data
  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const token = localStorage.getItem('token');
        
        if (!token) {
          setError('No authentication token found');
          setLoading(false);
          return;
        }

        const response = await fetch('http://localhost:5000/api/auth/profile', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        });

        const data = await response.json();

        if (response.ok) {
          setUser(data.user);
        } else {
          setError(data.message || 'Failed to fetch user profile');
        }
      } catch (error) {
        console.error('Profile fetch error:', error);
        setError('Network error. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    fetchUserProfile();
  }, []);

  // Handle close/back to home
  const handleClose = () => {
    window.location.href = '/';
  };

  // Handle logout
  const handleLogout = () => {
    // Remove token from localStorage
    localStorage.removeItem('token');
    
    // Optional: Clear any other user-related data
    localStorage.removeItem('user');
    
    // Show confirmation
    alert('Logged out successfully!');
    
    // Redirect to login/home page
    window.location.href = '/';
  };

  if (loading) {
    return (
      <div className="profile-container">
        <div className="profile-card">
          <div className="loading">Loading profile...</div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="profile-container">
        <div className="profile-card">
          <div className="error-message">{error}</div>
          <button onClick={handleLogout} className="logout-button">
            <LogOut size={16} />
            Go to Login
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="profile-container">
      <div className="profile-card">
        <button onClick={handleClose} className="close-button">
          <X size={20} />
        </button>
        
        <div className="profile-header">
          <div className="avatar">
            {getUserInitials(user?.name)}
          </div>
          <h2>My Profile</h2>
        </div>

        <div className="profile-info">
          <div className="info-item">
            <User size={20} className="icon" />
            <div className="info-content">
              <label>Full Name</label>
              <span>{user?.name || 'N/A'}</span>
            </div>
          </div>

          <div className="info-item">
            <Mail size={20} className="icon" />
            <div className="info-content">
              <label>Email</label>
              <span>{user?.email || 'N/A'}</span>
            </div>
          </div>
        </div>

        <button onClick={handleLogout} className="logout-button">
          <LogOut size={16} />
          Logout
        </button>
      </div>
    </div>
  );
};

export default Profile;