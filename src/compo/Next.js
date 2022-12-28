import {FaBars,FaSignOutAlt,FaList,FaCogs,FaSearch,FaBell,FaFileAlt,FaDonate,FaExclamationTriangle,FaEnvelope, FaUserAlt} from 'react-icons/fa'
import {Anchor} from 'antd'
export default function Next()
{
    return(
        <>
       
       <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">

<button id="sidebarToggleTop" class="btn btn-link d-md-none rounded-circle mr-3">
    <FaBars/>
</button>

<form class="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
    <div class="input-group">
        <input type="text" class="form-control bg-light border-0 small" placeholder="Search for..." aria-label="Search" aria-describedby="basic-addon2"/>
        <div class="input-group-append">
            <button class="btn btn-primary" type="button">
                <FaSearch/>
            </button>
        </div>
    </div>
</form>

<ul class="navbar-nav ml-auto">

    <li class="nav-item dropdown no-arrow d-sm-none">
        <Anchor class="nav-link dropdown-toggle" href="#" id="searchDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <FaSearch/>
        </Anchor>
        <div class="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in" aria-labelledby="searchDropdown">
            <form class="form-inline mr-auto w-100 navbar-search">
                <div class="input-group">
                    <input type="text" class="form-control bg-light border-0 small" placeholder="Search for..." aria-label="Search" aria-describedby="basic-addon2"/>
                    <div class="input-group-append">
                        <button class="btn btn-primary" type="button">
                            <FaSearch/>
                        </button>
                    </div>
                </div>
            </form>
        </div>
    </li>

    <li class="nav-item dropdown no-arrow mx-1">
        <Anchor class="nav-link dropdown-toggle" href="#" id="alertsDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <FaBell/>
            <span class="badge badge-danger badge-counter">3+</span>
        </Anchor>
        <div class="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="alertsDropdown">
            <h6 class="dropdown-header">
                Alerts Center
            </h6>
            <Anchor class="dropdown-item d-flex align-items-center" href="#">
                <div class="mr-3">
                    <div class="icon-circle bg-primary">
                        <FaFileAlt/>
                    </div>
                </div>
                <div>
                    <div class="small text-gray-500">December 12, 2019</div>
                    <span class="font-weight-bold">A new monthly report is ready to download!</span>
                </div>
            </Anchor>
            <Anchor class="dropdown-item d-flex align-items-center" href="#">
                <div class="mr-3">
                    <div class="icon-circle bg-success">
                        <FaDonate/>
                    </div>
                </div>
                <div>
                    <div class="small text-gray-500">December 7, 2019</div>
                    $290.29 has been deposited into your account!
                </div>
            </Anchor>
            <Anchor class="dropdown-item d-flex align-items-center" href="#">
                <div class="mr-3">
                    <div class="icon-circle bg-warning">
                        <FaExclamationTriangle/>
                    </div>
                </div>
                <div>
                    <div class="small text-gray-500">December 2, 2019</div>
                    Spending Alert: We've noticed unusually high spending for your account.
                </div>
            </Anchor>
            <Anchor className="dropdown-item text-center small text-gray-500" href="#">Show All Alerts</Anchor>
        </div>
    </li>

    <li class="nav-item dropdown no-arrow mx-1">
        <Anchor class="nav-link dropdown-toggle" href="#" id="messagesDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <FaEnvelope/>
            <span class="badge badge-danger badge-counter">7</span>
        </Anchor>
        <div class="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="messagesDropdown">
            <h6 class="dropdown-header">
                Message Center
            </h6>
            <Anchor class="dropdown-item d-flex align-items-center" href="#">
                <div class="dropdown-list-image mr-3">
                    <img class="rounded-circle" src="img/undraw_profile_1.svg" alt="..."/>
                    <div class="status-indicator bg-success"></div>
                </div>
                <div class="font-weight-bold">
                    <div class="text-truncate">Hi there! I am wondering if you can help me with a
                        problem I've been having.</div>
                    <div class="small text-gray-500">Emily Fowler · 58m</div>
                </div>
            </Anchor>
            <Anchor class="dropdown-item d-flex align-items-center" href="#">
                <div class="dropdown-list-image mr-3">
                    <img class="rounded-circle" src="img/undraw_profile_2.svg" alt="..."/>
                    <div class="status-indicator"></div>
                </div>
                <div>
                    <div class="text-truncate">I have the photos that you ordered last month, how
                        would you like them sent to you?</div>
                    <div class="small text-gray-500">Jae Chun · 1d</div>
                </div>
            </Anchor>
            <Anchor class="dropdown-item d-flex align-items-center" href="#">
                <div class="dropdown-list-image mr-3">
                    <img class="rounded-circle" src="img/undraw_profile_3.svg" alt="..."/>
                    <div class="status-indicator bg-warning"></div>
                </div>
                <div>
                    <div class="text-truncate">Last month's report looks great, I am very happy with
                        the progress so far, keep up the good work!</div>
                    <div class="small text-gray-500">Morgan Alvarez · 2d</div>
                </div>
            </Anchor>
            <Anchor class="dropdown-item d-flex align-items-center" href="#">
                <div class="dropdown-list-image mr-3">
                    <img class="rounded-circle" src="https://source.unsplash.com/Mv9hjnEUHR4/60x60" alt="..."/>
                    <div class="status-indicator bg-success"></div>
                </div>
                <div>
                    <div class="text-truncate">Am I a good boy? The reason I ask is because someone
                        told me that people say this to all dogs, even if they aren't good...</div>
                    <div class="small text-gray-500">Chicken the Dog · 2w</div>
                </div>
            </Anchor>
            <Anchor class="dropdown-item text-center small text-gray-500" href="#">Read More Messages</Anchor>
        </div>
    </li>

    <div class="topbar-divider d-none d-sm-block"></div>

    <li class="nav-item dropdown no-arrow">
        <Anchor class="nav-link dropdown-toggle" href="#" id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <span class="mr-2 d-none d-lg-inline text-gray-600 small">Douglas McGee</span>
            <img class="img-profile rounded-circle" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxhZbnu7jWmP0fl7XQDhdjgHbrH2lNKpOrYdX65S6sZg&s" alt=" "/>
        </Anchor>
        <div class="dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="userDropdown">
            <Anchor class="dropdown-item" href="#">
                <FaUserAlt/>
                Profile
            </Anchor>
            <Anchor class="dropdown-item" href="#">
                <FaCogs/>
                Settings
            </Anchor>
            <Anchor class="dropdown-item" href="#">
                <FaList/>
                Activity Log
            </Anchor>
            <div class="dropdown-divider"></div>
            <Anchor class="dropdown-item" href="#" data-toggle="modal" data-target="#logoutModal">
                <FaSignOutAlt/>
                Logout
            </Anchor>
        </div>
    </li>

</ul>


</nav>
        </>
    )
}