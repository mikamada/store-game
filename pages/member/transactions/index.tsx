import { GetServerSidePropsContext } from "next";
import Sidebar from "../../../components/organisms/Sidebar";
import TransactionContent from "../../../components/organisms/TransactionContent";
import { JwtPayloadTypes, UserTypes } from "../../../services/data-types";
import { jwtDecode } from "jwt-decode";

export default function Transaction() {
  return (
    <section className="transactions overflow-auto">
      <Sidebar activeMenu="transactions" />
      <TransactionContent />
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
