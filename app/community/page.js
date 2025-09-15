'use client';
import Communityhero from '../components/heroSection/communityhero';
import CommunityPurpose from './communitysections/communitypurpose';
import CommunityService from './communitysections/commiunityservice';
import Communityprocess from './communitysections/communityprocess';
import Moments from './communitysections/moments';
import Difference from './communitysections/difference';
import Aboutmarquee from "../aboutus/aboutsections/aboutmarquee";

export default function Community() {
  return (
    <>
      <Communityhero />
      <CommunityPurpose />
      <CommunityService />
      <Communityprocess />
      <Moments />
      <Difference />
      <Aboutmarquee />
    </>
  )
}
