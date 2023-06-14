import { NextResponse } from "next/server";
/* import { getCountryWithIp } from './helpers/ip'; */
/* import countries from './countries.json';
import maxmind from 'maxmind';
import * as path from 'path';
const MAXMIND_DB_PATH = 'helpers/ip/db';
const MAXMIND_DB_FILENAME = 'GeoLite2-Country.mmdb'; */
export async function middleware(req) {
  const res = NextResponse.next();
  //check user country with ip
  console.log(req);

  return res;
}

// Middleware must be declared in a single file and matcher indicates wich routes would trigger the middleware
// If config.matcher didn't exist, every route would run the middleware
export const config = {
  matcher: ["/"],
};
