using Dapper;
using Lucky.API.Model;
using Lucky.API.Model.Data;
using System.Data;

namespace Lucky.API.Repo
{
    public class TrabajadorRepo : ITrabajadorRepo
    {
        private readonly DapperDBContext context;
        public TrabajadorRepo(DapperDBContext context) {
            this.context = context;
        }

        public async Task<string> Create(Trabajador trabajador)
        {
            string response = string.Empty;
            string query = "Insert into Trabajador(nroDocumento,nombre,apellido,sexo,distrito) values (@nroDocumento,@nombre,@apellido,@sexo,@distrito)";
            var parameters = new DynamicParameters();
            parameters.Add("nroDocumento", trabajador.nroDocumento,DbType.String);
            parameters.Add("nombre", trabajador.nombre, DbType.String);
            parameters.Add("apellido", trabajador.apellido, DbType.String);
            parameters.Add("sexo", trabajador.sexo, DbType.String);
            parameters.Add("distrito", trabajador.distrito, DbType.String);
            using (var connection = this.context.CreateConnection())
            {
                await connection.ExecuteAsync(query,parameters);
                response = "pass";
            }
            return response;
        }

        public async Task<Trabajador> GetPorCodigo(int codigo)
        {
            string query = "Select * from Trabajador where idTrabajador=@codigo";
            using (var connection = this.context.CreateConnection())
            {
                var trabList = await connection.QueryFirstOrDefaultAsync<Trabajador>(query, new {codigo});
                return trabList;
            }
        }

        public async Task<List<Trabajador>> GetTrabajadores()
        {
            string query = "Select * from Trabajador";
            using(var connection=this.context.CreateConnection()) 
            {
                var trabList = await connection.QueryAsync<Trabajador>(query);
                return trabList.ToList();
            }
        }

        public async Task<string> Remove(int codigo)
        {
            string response=string.Empty;
            string query = "Delete from Trabajador where idTrabajador=@codigo";
            using (var connection = this.context.CreateConnection())
            {
                var trabList = await connection.ExecuteAsync(query, new { codigo });
                response = "pass";
            }
            return response;
        }

        public async Task<string> Update(int codigo, Trabajador trabajador)
        {
            string response = string.Empty;
            string query = "Update Trabajador set nroDocumento=@nroDocumento,nombre=@nombre,apellido=@apellido,sexo=@sexo,distrito=@distrito where idTrabajador=@codigo";
            var parameters = new DynamicParameters();

            parameters.Add("codigo", codigo, DbType.Int32);
            parameters.Add("nroDocumento", trabajador.nroDocumento, DbType.String);
            parameters.Add("nombre", trabajador.nombre, DbType.String);
            parameters.Add("apellido", trabajador.apellido, DbType.String);
            parameters.Add("sexo", trabajador.sexo, DbType.String);
            parameters.Add("distrito", trabajador.distrito, DbType.String);
            using (var connection = this.context.CreateConnection())
            {
                await connection.ExecuteAsync(query, parameters);
                response = "pass";
            }
            return response;
        }
    }
}
