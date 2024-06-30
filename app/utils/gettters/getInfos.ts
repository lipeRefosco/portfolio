import { ErrorMessage } from "@/app/core/dataTypes/errorMessage";
import { PageInfo } from "@/app/core/dataTypes/pageInfo";

export async function getInfos(): Promise<PageInfo> {
    const req = await fetch("https://api.github.com/gists/0ebc655045912d9192aada6040f2b539")
    const msgError: ErrorMessage = {
        message: "Some error on fething data!"
    }

    return req.json().then(data => JSON.parse(data.files["portfolio-infos.json"].content))
}