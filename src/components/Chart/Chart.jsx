import React, { useState, useEffect } from "react"
import { Line, Bar } from "react-chartjs-2"

import { fetchDataDaily } from "../../api"
import styles from "./Chart.module.css"

const Chart = ({ data: { confirmed, recovered, deaths }, country }) => {
  const [dailyData, setDailyData] = useState({})

  useEffect(() => {
    const fetchDataAPI = async () => {
      const dataApi = await fetchDataDaily()
      setDailyData(dataApi.reverse())
    }
    fetchDataAPI()
  }, [])

  const barChart = confirmed && (
    <Bar
      className={styles.barSection}
      data={{
        labels: ["Infected", "Active", "Recovered", "Deaths"],
        datasets: [
          {
            label: "People",
            backgroundColor: [
              "rgba(0, 0, 255, 0.5)",
              "rgb(255,255,255)",
              "rgba(0, 255, 0, 0.5)",
              "rgba(255, 0, 0, 0.5)",
            ],
            data: [
              confirmed,
              confirmed - recovered - deaths,
              recovered,
              deaths,
            ],
          },
        ],
      }}
      options={{
        legend: { display: false },
        title: { display: true, text: `Current state in ${country}` },
      }}
      borderSkipped={"bottom"}
    />
  )

  const lineChart = dailyData[0] && (
    <Line
      data={{
        labels: dailyData.map(({ date }) =>
          new Date(date).toLocaleDateString()
        ),
        datasets: [
          {
            data: dailyData.map(data => data.confirmed.positive),
            label: "Infected",
            borderColor: "#3333ff",
            fill: true,
          },
          {
            data: dailyData.map(
              data => data.confirmed.positive - data.deaths - data.recovered
            ),
            label: "Active",
            borderColor: "white",
            backgroundColor: "rgba(255, 255, 255, 0.5)",
            fill: true,
          },
          {
            data: dailyData.map(data => data.recovered),
            label: "Recovered",
            borderColor: "green",
            backgroundColor: "rgba(0, 255, 0, 0.5)",
            fill: true,
          },
          {
            data: dailyData.map(data => data.deaths),
            label: "Deaths",
            borderColor: "red",
            backgroundColor: "rgba(255, 0, 0, 0.5)",
            fill: true,
          },
        ],
      }}
    />
  )

  return (
    <div className={styles.container}>{country ? barChart : lineChart}</div>
  )
}

export default Chart
