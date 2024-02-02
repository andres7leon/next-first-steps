import type { Metadata } from "next";

export const metadata: Metadata = {
 title: 'SEO Title About',
 description: 'SEO Title about',
};

export  default function AboutPage() {
  return (
    <><div>About page</div><div>{new Date().getDay()}</div></>
  )
}
