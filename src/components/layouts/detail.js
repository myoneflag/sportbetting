import * as React from 'react'

export const Detail = ({detail}) => {

  return (
    <div className="detail-table-div">
      <div className="bet-sec1-green-div">
        <table className="bet-sec1-lay-back-table">
          <tbody>
            <tr>
              <td className="bet-sec1-league-td">
                <a href="#">
                  <h1>{detail}</h1>
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="bet-sec1-light-green-div detail-bet-sec1-light-green-div">
        <a href="#">
          <h5>french ligue 1</h5>
        </a>
      </div>
      <div className="detail-football-table-second-heading-div">
        <h5>match result</h5>
      </div>
      <div className="detail-table1 table-3td">
        <table className="table">
          <tbody>
            <tr>
              <td className="detail-table1-td1">
                <h2>Paris Saint-Germain</h2><span>1.31</span>
              </td>
              <td className="detail-table1-td2">
                <h2>Draw</h2> <span>6.10</span>
              </td>
              <td className="detail-table1-td3">
                <h2>Lyon</h2> <span>8.25</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="detail-football-table-second-heading-div">
        <h5>double chance</h5>
      </div>
      <div className="detail-table1 table-3td">
        <table className="table">
          <tbody>
            <tr>
              <td className="detail-table1-td1">
                <h2>Paris Saint-Germain or Draw</h2> <span>1.10</span>
              </td>
              <td className="detail-table1-td2">
                <h2>Paris Saint-Germain or Lyon</h2> <span>1.14</span>
              </td>
              <td className="detail-table1-td3">
                <h2>Draw or Lyon</h2> <span>3.40</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="detail-football-table-second-heading-div">
        <h5>under/over</h5>
      </div>
      <div className="detail-table1 table-2td">
        <table className="table">
          <tbody>
            <tr>
              <td className="detail-table1-td1">
                <h2>Over 0.5</h2><span>1.01</span>
              </td>
              <td className="detail-table1-td3">
                <h2>Under 0.5</h2><span>40.00</span>
              </td>
            </tr>
            <tr>
              <td className="detail-table1-td1">
                <h2>Over 1.5</h2><span>1.08</span>
              </td>
              <td className="detail-table1-td3">
                <h2>Under 1.5</h2><span>8.60</span>
              </td>
            </tr>
            <tr>
              <td className="detail-table1-td1">
                <h2>Over 2.5</h2><span>1.29</span>
              </td>
              <td className="detail-table1-td3">
                <h2>Under 2.5</h2><span>3.62</span>
              </td>
            </tr>
            <tr>
              <td className="detail-table1-td1">
                <h2>Over 3.5</h2><span>1.73</span>
              </td>
              <td className="detail-table1-td3">
                <h2>Under 3.5</h2><span>2.12</span>
              </td>
            </tr>
            <tr>
              <td className="detail-table1-td1">
                <h2>Over 4.5</h2><span>2.62</span>
              </td>
              <td className="detail-table1-td3">
                <h2>Under 4.5</h2><span>1.50</span>
              </td>
            </tr>
            <tr>
              <td className="detail-table1-td1">
                <h2>Over 5.5</h2><span>4.35</span>
              </td>
              <td className="detail-table1-td3">
                <h2>Under 5.5</h2><span>1.22</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="detail-football-table-second-heading-div">
        <h5>total goals</h5>
      </div>

      <div className="detail-table1 table-2td">
        <table className="table">
          <tbody>
            <tr>
              <td className="detail-table1-td1">
                <h2>6+</h2><span>4.30</span>
              </td>
              <td className="detail-table1-td3">
                <h2>0 - 1</h2><span>8.50</span>
              </td>
            </tr>
            <tr>
              <td className="detail-table1-td1">
                <h2>2 - 3</h2><span>2.50</span>
              </td>
              <td className="detail-table1-td3">
                <h2>4 - 5</h2><span>2.50</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="detail-football-table-second-heading-div">
        <h5>handicap</h5>
      </div>

      <div className="detail-table1 table-2td">
        <table className="table">
          <tbody>
            <tr>
              <td className="detail-table1-td1">
                <h2>Paris Saint-Germain -1</h2><span>1.70</span>
              </td>
              <td className="detail-table1-td3">
                <h2>Draw (Paris Saint-Germain -1)</h2><span>4.40</span>
              </td>
            </tr>
            <tr>
              <td className="detail-table1-td1">
                <h2>Lyon +1</h2><span>3.40</span>
              </td>
              <td className="detail-table1-td3">
                <h2>Paris Saint-Germain +1</h2><span>1.10</span>
              </td>
            </tr>
            <tr>
              <td className="detail-table1-td1">
                <h2>Draw (Paris Saint-Germain +1)</h2><span>11.00</span>
              </td>
              <td className="detail-table1-td3">
                <h2>Lyon -1</h2><span>16.00</span>
              </td>
            </tr>
            <tr>
              <td className="detail-table1-td1">
                <h2>Paris Saint-Germain -2</h2><span>2.60</span>
              </td>
              <td className="detail-table1-td3">
                <h2>Draw (Paris Saint-Germain -2)</h2><span>4.40</span>
              </td>
            </tr>
            <tr>
              <td className="detail-table1-td1">
                <h2>Lyon +2</h2><span>2.00</span>
              </td>
              <td className="detail-table1-td3">
                <h2>Paris Saint-Germain +2</h2><span>1.01</span>
              </td>
            </tr>
            <tr>
              <td className="detail-table1-td3" colSpan="2">
                <h2>Draw (Paris Saint-Germain +2)</h2><span>29.00</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}