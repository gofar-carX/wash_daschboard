import axios from "axios";
import Router from "next/router";

export async function MyGet(url, ctx) {
  const cookie = ctx.req?.headers.cookie;
  try {
    const { data } = axios.get(url, {
      headers: {
        cookie: cookie,
      },
    });
    console.log({ data });
    return data;
  } catch (error) {
    console.log(err);
    Router.replace("/admin/Login");
  }
}
