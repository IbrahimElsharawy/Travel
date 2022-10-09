import React from "react";
import "./Search.css";
import Gold from "../../assets/gold.png";

const Search = () => {
  return (
    <div className="Search py-5" name="book">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 left">
            <div className="info">
            <h2>LUXURY INCLUDED VACATIONS FOR TWO PEOPLE</h2>
            <p>
              Come experience the very pinnacle of luxury Caribbean
              all-inclusive vacations for couples at Sandals Resorts. Our luxury
              beach resorts, set along the most gorgeous tropical settings and
              exquisite beaches in Saint Lucia, Jamaica, Antigua, The Bahamas,
              Grenada, Barbados and Curaçao, feature unlimited gourmet dining,
              unique bars serving premium liquors and wines, and every land and
              water sport, including complimentary green fees at our golf
              resorts and PADI® certified scuba diving at most resorts. If you
              are planning a wedding, Sandals is the leader in Caribbean
              destination weddings and honeymoon packages.
            </p>
            </div>
            <div className="row">
              <div className="col-lg-6 left ">
                <div className="row">
                  <div className="col-4">
                    <img src={Gold} alt="/" />
                  </div>
                  <div className="col-8">
                    <h3>WORLD'S LEADING</h3>
                    <p>ALL-INCLUSIVE COMPANY FOR 20 YEARS IN-A-ROW</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 text-center">
                <h3>NO ONE INCLUDES MORE</h3>
                <p>ALL-INCLUSIVE COMPANY FOR 20 YEARS IN-A-ROW</p>
                <button>View Packages</button>
              </div>
            </div>
          </div>
          <div className="col-lg-4 right">
            <div className="promo text-center">
              <h4 className="save">GET AN ADDITIONAL 7% OFF</h4>
              <p className="timer">12 HOURS LEFT!</p>
              <p className="offers">VIEW ALL CURRENT OFFERS</p>
            </div>
            <form>
              <div className="row input-wrap">
                <label>Destination</label>

                <div className="col-lg-12">
                  <select>
                    <option value="1">Grande Antigua</option>
                    <option value="1">Grenda</option>
                    <option value="1">Emerald Bay</option>
                    <option value="1">Bora Bora</option>
                    <option value="1">Key West</option>
                    <option value="1">Maldives</option>
                    <option value="1">Barbados</option>
                  </select>
                </div>
              </div>
              <div className=" row check">
                <div className="col-6">
                  <label>Check-In</label>
                  <input type="date" />
                </div>
                <div className="col-6">
                  <label>Check-Out</label>
                  <input type="date" />
                </div>
              </div>
              <button>Rates & Availabilities </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
