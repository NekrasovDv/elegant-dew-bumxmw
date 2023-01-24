import axios from "axios";

async function fetchDate() {
  const request = await axios.get(
    "https://timezone.abstractapi.com/v1/current_time/?api_key=607d971667844326bafd4ddcc7d3b193&location=Oxford, United Kingdomhttps://timezone.abstractapi.com/v1/current_time/?api_key=607d971667844326bafd4ddcc7d3b193&location=Oxford, United Kingdomhttps://timezone.abstractapi.com/v1/current_time/?api_key=607d971667844326bafd4ddcc7d3b193&location=Oxford, United Kingdom"
  );
  return request.data;
}

export default fetchDate;
