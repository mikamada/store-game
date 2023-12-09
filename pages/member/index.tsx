import { GetServerSidePropsContext } from "next";
import OverviewContent from "../../components/organisms/OverviewContent";
import Sidebar from "../../components/organisms/Sidebar";
import { jwtDecode } from "jwt-decode"
import { JwtPayloadTypes, UserTypes } from "../../services/data-types";

export default function Member() {
  return (
    <section className="overview overflow-auto">
      <Sidebar activeMenu="overview" />
      <OverviewContent />
    </section>
  )
}

export const getServerSideProps = async ({ req }: GetServerSidePropsContext) => {
  const { token } = req.cookies;
  if (!token) {
    return {
      redirect: {
        destination: "/sign-in",
        permanent: false
      }
    }
  }
  const jwtToken = Buffer.from(token, "base64").toString("ascii");
  const payload: JwtPayloadTypes = jwtDecode(jwtToken);
  const userFromPayload: UserTypes = payload?.player;
  const IMG = process.env.NEXT_PUBLIC_IMAGE;
  userFromPayload.avatar = `${IMG}/${userFromPayload.avatar}`
  return {
    props: {
      user: userFromPayload
    }
  }

}
