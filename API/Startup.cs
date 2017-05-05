using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using System.IO;
using UofJson.API.Infrastructure;
using UofJson.API.Helpers;
using Microsoft.AspNetCore.Mvc;

namespace UofJson.API
{
	public class Startup
    {
        public Startup(IHostingEnvironment env)
        {
            var builder = new ConfigurationBuilder()
                .SetBasePath(env.ContentRootPath)
                .AddJsonFile("appsettings.json", optional: false, reloadOnChange: true)
                .AddJsonFile($"appsettings.{env.EnvironmentName}.json", optional: true)
                .AddEnvironmentVariables();
            Configuration = builder.Build();
        }

        public IConfigurationRoot Configuration { get; }

        public void ConfigureServices(IServiceCollection services)
        {
            services.AddMvc(options =>
			{
				if (Configuration["Environment"] == "Development")
				{
					options.UseCentralRoutePrefix(new RouteAttribute("api/"));
				}
			});

			services.AddDbContext<SchoolContext>(options => options.UseSqlServer(Configuration["ConnectionString"]));

			services.AddSwaggerGen();
		}

		public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory, SchoolContext schoolContext)
        {
            loggerFactory.AddConsole(Configuration.GetSection("Logging"));
            loggerFactory.AddDebug();

			if (env.IsDevelopment())
			{
				schoolContext.SeedContext();
			}

			app.UseMvc();

			app.UseSwagger();
			app.UseSwaggerUi();
        }

		public static void Main(string[] args)
		{
			var host = new WebHostBuilder()
				.UseKestrel()
				.UseContentRoot(Directory.GetCurrentDirectory())
				.UseIISIntegration()
				.UseStartup<Startup>()
				.Build();

			host.Run();
		}
	}
}
