const API_URL = import.meta.env.VITE_API_URL;

export const postData = async(data)=>{
    return await fetch(`${API_URL}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
}