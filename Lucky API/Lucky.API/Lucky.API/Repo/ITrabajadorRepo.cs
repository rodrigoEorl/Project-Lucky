using Lucky.API.Model;

namespace Lucky.API.Repo
{
    public interface ITrabajadorRepo
    {
        Task<List<Trabajador>> GetTrabajadores();
        Task<Trabajador> GetPorCodigo(int codigo);
        Task<string> Create(Trabajador trabajador);
        Task<string> Update(int codigo, Trabajador trabajador);
        Task<string> Remove(int codigo);
    }
}
