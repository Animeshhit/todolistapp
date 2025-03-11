import Styled from "styled-components";
import { Link, NavLink } from "react-router-dom";
import {
  Calendar,
  ClipboardList,
  Plus,
  SquareKanban,
  Star,
} from "lucide-react";
import { Chart as ChartJs, ArcElement, Legend, Tooltip } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJs.register(ArcElement, Legend, Tooltip);

const data = {
  labels: ["pending", "completed"],
  datasets: [
    {
      label: "Tasks",
      data: [90, 10],
      backgroundColor: ["#3F9142", "#142E15"],
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
  },
};

const LeftSideBarWrapper = Styled.div`
  background:${({ theme }) => theme.lightBg};
  width:22%;
  padding-inline:1.2rem;
  padding-top:8rem;
  padding-bottom:2rem;
  margin-top:8rem;
`;

const ProfileWrapper = Styled.div`
  text-align:center;
  position:relative;
  img{
    position:absolute;
    width:150px;
    height:150px;
    border-radius:50%;
    margin-bottom:5px;
    left:50%;
    transform:translateX(-50%) translateY(-140%);
  }
  p{
    font-size:1.2rem;
    font-weight:600;
    position:absolute;
    left:50%;
    width:100%;
    transform:translateX(-50%) translateY(-200%);
  }
`;

const NavLinksWrapper = Styled.div`
  background:${({ theme }) => theme.cardBg};
  width:100%;
  padding:2.2rem 0;
  margin:1.2rem 0;
  a{
    display:flex;
    align-items:center;
    gap:0.8rem;
    padding:0.5rem 1rem;
    border-radius:8px;
    &:hover{
      background:rgba(0,0,0,0.3);
    }
    color:${({ theme }) => theme.text};
  }
  a.active{
    background:#35793729;
    color:#357937;    
  }
`;

const NavLinks = [
  { href: "/", text: "All Tasks", icon: ClipboardList },
  { href: "/today", text: "Today", icon: Calendar },
  { href: "/starred", text: "important", icon: Star },
  { href: "/plans", text: "Planned", icon: SquareKanban },
];

function LeftSideBar() {
  return (
    <LeftSideBarWrapper>
      <ProfileWrapper>
        <img
          src="https://avatars.githubusercontent.com/u/128497576?v=4"
          alt="image"
        />
        <p>Hey, Animesh Kumbhakar</p>
      </ProfileWrapper>
      <NavLinksWrapper>
        {NavLinks.map((link) => (
          <NavLink to={link.href}>
            <link.icon />
            <span>{link.text}</span>
          </NavLink>
        ))}
      </NavLinksWrapper>
      <NavLinksWrapper>
        <Link to="/">
          <Plus />
          <span>Add list</span>
        </Link>
      </NavLinksWrapper>
      <NavLinksWrapper>
        <Doughnut data={data} options={options} />
      </NavLinksWrapper>
    </LeftSideBarWrapper>
  );
}

export default LeftSideBar;
