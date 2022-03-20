import './App.css';
import Card from "./components/Card"
import data from "./Data.json"
import React, { useState, useEffect } from 'react'
import Tab from './components/Tab'
import Filter from './components/Filter';

function App() {

  const [activeTab, setactiveTab] = useState("All")
  const [allData, setallData] = useState(data[0].data)
  const [Fdata, setFdata] = useState("")
  const [search, setsearch] = useState("")
  const [searchData, setsearchData] = useState("")
  const [searchdone, setsearchdone] = useState(false)
  const [filterApplied, setfilterApplied] = useState(false)
  const [filterValue, setfilterValue] = useState({ "burner": false, "subscription": false })
  const setActive = (e) => {
    setactiveTab(e)

  }

  const applyFilter = (e) => {
    setfilterValue(e)
    setfilterApplied(false)
  }
  const clearFilter = () => {
    setfilterApplied(false)
    setfilterValue({ "burner": false, "subscription": false })
  }
  useEffect(() => {
    filterData()
    return () => {
    }
  }, [activeTab, search, filterValue])
  const searchFcn = (e) => {
    let newData
    let newFilteredData
    setsearch(e.target.value.toLowerCase())
    if (e.target.value.trim() != "") {
      setsearchdone(true)
      newData = Fdata.filter(item => {
        if (item.name.toLowerCase().includes(e.target.value.toLowerCase())) {
          return true
        }
      })
      if (filterValue.burner == true && filterValue.subscription == false) {
        newFilteredData = newData.filter(item => {
          if (item.card_type == "burner") {
            return true
          }
        })
        setsearchData(newFilteredData)
      } else if (filterValue.subscription == true && filterValue.burner == false) {
        newFilteredData = newData.filter(item => {
          if (item.card_type == "subscription") {
            return true
          }
        })
        setsearchData(newFilteredData)
      } else {
        setsearchData(newData)
      }

    } else {
      setsearchdone(false)
      filterData()
    }

  }

  const filterData = () => {
    let myData
    let newFilteredData
    if (activeTab == "All") {
      if (filterValue.burner == true && filterValue.subscription == false) {
        newFilteredData = allData.filter(item => {
          if (item.card_type == "burner") {
            return true
          }
        })
        setFdata(newFilteredData)
      } else if (filterValue.subscription == true && filterValue.burner == false) {
        newFilteredData = allData.filter(item => {
          if (item.card_type == "subscription") {
            return true
          }
        })
        setFdata(newFilteredData)
      } else {
        setFdata(allData)
      }
    } else if (activeTab == "Yours") {
      let dataTemp = allData
      myData = dataTemp.filter((item) => {
        if (item.owner_id == 1) {
          return true
        }
      })
      if (filterValue.burner == true && filterValue.subscription == false) {
        newFilteredData = myData.filter(item => {
          if (item.card_type == "burner") {
            return true
          }
        })
        setFdata(newFilteredData)
      } else if (filterValue.subscription == true && filterValue.burner == false) {
        newFilteredData = myData.filter(item => {
          if (item.card_type == "subscription") {
            return true
          }
        })
        setFdata(newFilteredData)
      } else {
        setFdata(myData)
      }
    } else {
      let dataTemp = allData
      myData = dataTemp.filter((item) => {
        if (item.status != "active") {
          return true
        }
      })
      if (filterValue.burner == true && filterValue.subscription == false) {
        newFilteredData = myData.filter(item => {
          if (item.card_type == "burner") {
            return true
          }
        })
        setFdata(newFilteredData)
      } else if (filterValue.subscription == true && filterValue.burner == false) {
        newFilteredData = myData.filter(item => {
          if (item.card_type == "subscription") {
            return true
          }
        })
        setFdata(newFilteredData)
      } else {
        setFdata(myData)
      }
    }
  }
  return (
    <>
      <div className="App">

        <div className='mainHead'>
          <h2 className='heading'>Virtual Cards</h2>
          <span className='learnMoreSpan'><img className='learnMoreImg' src={process.env.PUBLIC_URL + "./videocamera.png"} />Learn More</span>
          <button className='addCard'>+   Virtual Card</button>
        </div>
        <Tab active={activeTab} setActive={setActive} search={searchFcn} filter={() => setfilterApplied(true)}>
          {Fdata.length > 0 && !searchdone ?
            < Card data={Fdata} active={activeTab} />
            : searchData.length > 0 && searchdone ? < Card data={searchData} active={activeTab} /> : <h2 className='noCards'>No Items Available</h2>
          }
        </Tab>
        <Filter isShow={filterApplied} applyFilter={applyFilter} clearFilter={clearFilter} />
      </div>
    </>
  );
}

export default App;
