import Sidebar from "../components/Sidebar"
import Navbar from "../components/Navbar";
import Chart from "../components/Chart";
import List  from "../components/Table";

const Single = () =>{
    return(
        <div className="single">
            <Sidebar />
            <div className="singleContainer">
                <Navbar />
                <div className="top">
                    <div className="left">
                        <div className="editButton">Edit</div>
                        <h1 className="title">Information</h1>
                        <div className="item">
                            <img src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" alt="" className="itemImg" />
                            <div className="details">
                                <h1 className="itemTitle">Jane Doe</h1>
                                <div className="detailItem">
                                    <span className="itemkey">Email:</span>
                                    <span className="itemkey">janedoe@gmail.com</span>
                                </div>
                                <div className="detailItem">
                                    <span className="itemkey">Phone:</span>
                                    <span className="itemkey">+1 2345 67 89</span>
                                </div>
                                <div className="detailItem">
                                    <span className="itemkey">Address:</span>
                                    <span className="itemkey">Elton St. 234 Garden Yd. NewYork</span>
                                </div>
                                <div className="detailItem">
                                    <span className="itemkey">Country:</span>
                                    <span className="itemkey">USA</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="right">
                        <Chart aspect={ 3 / 1} title= "User Spending ( Last 6 Months)" />
                    </div>
                </div>
                <div className="bottom">
                    <h1 className="title">Last Transcations</h1>
                    <List />
                </div>
            </div>
        </div>
    );
}

export default Single;