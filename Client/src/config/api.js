// API configuration
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || '/api';
const SITE_BASE_URL = import.meta.env.VITE_SITE_BASE_URL || '';

// API endpoints
export const API_ENDPOINTS = {
  CONTACT: `${API_BASE_URL}/contact`,
  ADMIN_LOGIN: `${API_BASE_URL}/admin/login`,
  ADMIN_SUBMISSIONS: `${API_BASE_URL}/admin/submissions`,
  ADMIN_SUBMISSIONS_EXPORT: `${API_BASE_URL}/admin/submissions/export`,
  HEALTH: `${API_BASE_URL}/health`,
};

// API utility functions
export const apiRequest = async (url, options = {}) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
    ...options,
  };

  // Add auth token if available
  const token = localStorage.getItem('adminToken');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  try {
    const response = await fetch(url, config);
    const data = await response.json();
    
    if (!response.ok) {
      throw new Error(data.message || 'Request failed');
    }
    
    return data;
  } catch (error) {
    console.error('API Request Error:', error);
    throw error;
  }
};

export { API_BASE_URL, SITE_BASE_URL };
