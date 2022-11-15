import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import type { RootState } from "../store";

import { verifyUser, logOut } from "../lib/utils/auth";

import WeekList from "../components/admin/week/weekList";
import DayList from "../components/admin/day/dayList";
import SaveMenu from "../components/admin/menu/saveMenu";

const Admin = () => {
  const { selectedWeek } = useSelector((state: RootState) => state.week);
  const router = useRouter();
  const [isAuth, setIsAuth] = useState(false);

  const handleClick = () => {
    logOut();
    router.push("/login");
  };

  useEffect(() => {
    (async () => {
      const isLogged = await verifyUser();

      if (isLogged) {
        setIsAuth(true);
      } else {
        setIsAuth(false);
        router.push("/login");
      }
    })();
  }, [router]);

  return (
    <>
      {!isAuth && <h1>Loading...</h1>}
      {isAuth && (
        <div>
          <SaveMenu />
          <WeekList />
          <DayList weekNumber={selectedWeek} />
        </div>
      )}
    </>
  );
};

export default Admin;
