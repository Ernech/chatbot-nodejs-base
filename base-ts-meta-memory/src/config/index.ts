import "dotenv/config"

export const config={

        PORT: process.env.PORT,
        jwtToken: process.env.jwtToken,
        numberId: process.env.numberId,
        verifyToken: process.env.verifyToken,
        version:"v20.0",
        Model:process.env.MODEL,
        ApiKey:process.env.ApiKey
}