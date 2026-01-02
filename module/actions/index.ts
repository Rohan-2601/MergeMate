"use server"
import { fetchUserContribution, getGithubToken } from "@/module/github/lib/github"
import { headers } from "next/headers"
import { auth } from "@/lib/auth"
import { Octokit } from "octokit"
import prisma from "@/lib/db"

export async function getDashboardStats() {
    try{
const session = await auth.api.getSession({
    headers: await headers()
})
if (!session) {
    throw new Error("Unauthorized")
}
const token = await getGithubToken()
const octokit = new Octokit({
    auth: token,
})
const {data:user}= await octokit.rest.users.getAuthenticated()
    // TODO: fetch total connected repo from db
    const totalrepo=30;
  
    const calendar= await fetchUserContribution(token , user.login);
    const totalCommits= calendar.totalContributions ||0;
    
    const {data:prs}=await octokit.rest.search.issuesAndPullRequests({
        q:`author:${user.login}`,
        type:"pr",
        sort:"created",
        per_page:1
    })
    const totalPRs=prs.total_count;

    //TODO: count ai reviews from db
    const totalReviews=44;
    return {
      totalCommits,
      totalPRs,
      totalReviews,
      totalrepo
    }

}catch(error){
        console.log("error fetching dashboard stats:",error)
        return {
          totalCommits:0,
          totalPRs:0,
          totalReviews:0,
          totalrepo:0
        }
    }
}