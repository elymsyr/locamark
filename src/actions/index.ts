import axios from "axios";
import { API_BASEURL } from "../lib/constants";
import { IGeometry } from "../types";

const getAuthHeader = () => {
  // Replace with actual token retrieval logic
  const token = localStorage.getItem("token");
  return { Authorization: `Bearer ${token}` };
};

export async function _getAll() {
  try {
    const response = await axios.get(`${API_BASEURL}/Geometry`, {
      headers: getAuthHeader(),
    });
    return response.data;
  } catch (error) {
    console.error("Fetch error:", error);
    throw error;
  }
}

export async function _getById(id: number) {
  try {
    const response = await axios.get(`${API_BASEURL}/Geometry/${id}`, {
      headers: getAuthHeader(),
    });
    return response.data;
  } catch (error) {
    console.error("Fetch error:", error);
    throw error;
  }
}

export async function _create(geometry: IGeometry) {
  console.log(geometry);
  try {
    const response = await axios.post(`${API_BASEURL}/Geometry`, geometry, {
      headers: {
        ...getAuthHeader(),
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Fetch error:", error);
    throw error;
  }
}

export async function _update(id: number, updatedGeometry: IGeometry) {
  try {
    const response = await axios.put(
      `${API_BASEURL}/Geometry/${id}`,
      updatedGeometry,
      {
        headers: {
          ...getAuthHeader(),
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Fetch error:", error);
    throw error;
  }
}

export async function _delete(id: number) {
  try {
    const response = await axios.delete(`${API_BASEURL}/Geometry/${id}`, {
      headers: getAuthHeader(),
    });
    return response.data;
  } catch (error) {
    console.error("Fetch error:", error);
    throw error;
  }
}
