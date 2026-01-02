import { Octokit } from "octokit";
import { auth } from "@/lib/auth";
import prisma from "@/lib/db";
import { headers } from "next/headers";


export const getGithubToken = async () => {
    const session = await auth.api.getSession({
      headers: await headers(),
    })
     if(!session){
           throw new Error("Unauthorized")
     }
     const account = await prisma.account.findFirst({
      where:{
        userId: session.user.id,
        providerId: "github",
      }
     })
     if(!account?.accessToken){
      throw new Error("No access token found")
     }
     return account.accessToken
    }
    import { Octokit } from "octokit";

export async function fetchUserContribution(token: string, username: string) {
  const octokit = new Octokit({ auth: token });

  const query = `
    query($username: String!) {
      user(login: $username) {
        contributionCollection {
          contributionCalendar {
            totalContributions
            weeks {
              contributionDays {
                contributionCount
                date
                color
              }
            }
          }
        }
      }
    }
  `;

  interface ContributionData {
    user: {
      contributionCollection: {
        contributionCalendar: {
          totalContributions: number;
          weeks: {
            contributionDays: {
              contributionCount: number;
              date: string;
              color: string;
            }[];
          }[];
        };
      };
    };
  }

  try {
    const response: ContributionData = await octokit.graphql(query, {
      username,
    });

    return response.user.contributionCollection.contributionCalendar;
  } catch (error: any) {
    console.error("Failed to fetch contributions:", error?.message || error);
    throw new Error("Unable to fetch user contribution data");
  }
}
