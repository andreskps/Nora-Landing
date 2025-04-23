import mysql from "serverless-mysql";

const db = mysql({
  config: {
    host: process.env.MYSQL_HOST,
    port: process.env.MYSQL_PORT ? parseInt(process.env.MYSQL_PORT) : 3306,
    database: process.env.MYSQL_DATABASE,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
  },
});

// En tu archivo db.ts donde tienes la función executeQuery

// Interfaces para tipado
interface QueryError {
  error: any;
}

interface MySQLResultSuccess {
  affectedRows?: number;
  insertId?: number;
  // Otras propiedades que podrían devolver las consultas MySQL
}

// Tipo unión para resultados de consulta
export type QueryResult = MySQLResultSuccess | QueryError;

// Modificar la función executeQuery para usar estos tipos
export async function executeQuery({
  query,
  values = [],
}: {
  query: string;
  values?: any[];
}): Promise<QueryResult> {
  try {
    const results = await db.query(query, values);
    await db.end();
    return results as MySQLResultSuccess;
  } catch (error) {
    return { error };
  }
}
