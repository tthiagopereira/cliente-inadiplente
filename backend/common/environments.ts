export const environments ={
    server: {port: process.env.SERVER_PORT || 3000},
    db: {url: process.env.DB_URL || 'mongodb://localhost/cliente-api'}
}
