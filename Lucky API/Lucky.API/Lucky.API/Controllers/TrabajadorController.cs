using Lucky.API.Model;
using Lucky.API.Repo;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Lucky.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TrabajadorController : ControllerBase
    {
        private readonly ITrabajadorRepo repo;
        public TrabajadorController(ITrabajadorRepo repo)
        {
            this.repo = repo;
        }

        [HttpGet("GetTrabajadores")]
        public async Task<ActionResult> GetTrabajadores() 
        {
            var _list=await this.repo.GetTrabajadores();
            if (_list != null)
            {
                return Ok(_list);
            }
            else 
            { 
                return NotFound(); 
            }
        }

        [HttpGet("GetPorCodigo/{codigo}")]
        public async Task<ActionResult> GetPorCodigo(int codigo)
        {
            var _list = await this.repo.GetPorCodigo(codigo);
            if (_list != null)
            {
                return Ok(_list);
            }
            else
            {
                return NotFound();
            }
        }

        [HttpPost("Create")]
        public async Task<ActionResult> Create([FromBody] Trabajador trabajador)
        {
            var _list = await this.repo.Create(trabajador);
            return Ok(_list);
        }

        [HttpPut("Update")]
        public async Task<ActionResult> Update([FromBody] Trabajador trabajador)
        {
            var _list = await this.repo.Update(trabajador.idTrabajador,trabajador);
            return Ok(_list);
        }

        [HttpDelete("Remove/{codigo}")]
        public async Task<ActionResult> Remove(int codigo)
        {
            var _list = await this.repo.Remove(codigo);
            return Ok(_list);
        }
    }
}
