import { Module } from '@nestjs/common';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';
import { TasksModule } from './tasks/tasks.module';
import { PersonaModule } from './persona/persona.module';
import { PlanAccionModule } from './plan_accion/plan_accion.module';
import { UserModule } from './user/user.module';
import { ComparecienteModule } from './compareciente/compareciente.module';
import { PreguntaModule } from './pregunta/pregunta.module';
import { ProyectoModule } from './proyecto/proyecto.module';
import { EncuestaModule } from './encuesta/encuesta.module';
import { ProvinciaModule } from './provincia/provincia.module';
import { CantonModule } from './canton/canton.module';
import { ParroquiaModule } from './parroquia/parroquia.module';
import { ComunidadModule } from './comunidad/comunidad.module';
import { ActaCompromisoModule } from './acta_compromiso/acta_compromiso.module';
import { AcHasPersonaModule } from './ac_has_persona/ac_has_persona.module';
import { AudPublicaModule } from './aud_publica/aud_publica.module';
import { CentroInfPublicaModule } from './centro_inf_publica/centro_inf_publica.module';
import { CriterioComunidadModule } from './criterio_comunidad/criterio_comunidad.module';
import { DifunsionMecanismoModule } from './difunsion_mecanismo/difunsion_mecanismo.module';
import { EncuestaPreguntaModule } from './encuesta_pregunta/encuesta_pregunta.module';
import { InspeccionSocialModule } from './inspeccion_social/inspeccion_social.module';
import { ItemIsModule } from './item_is/item_is.module';
import { MecPartCiudadanaModule } from './mec_part_ciudadana/mec_part_ciudadana.module';
import { OpcionModule } from './opcion/opcion.module';
import { PreguntaOpcionModule } from './pregunta_opcion/pregunta_opcion.module';
import { QuejaReclamoModule } from './queja_reclamo/queja_reclamo.module';
import { RgPartCiudadanaModule } from './rg_part_ciudadana/rg_part_ciudadana.module';
import { RgpcCriterioComunidadModule } from './rgpc_criterio_comunidad/rgpc_criterio_comunidad.module';
import { RgpcMecanismoPartciudModule } from './rgpc_mecanismo_partciud/rgpc_mecanismo_partciud.module';
import { RgpcPersonalAsignadoModule } from './rgpc_personal_asignado/rgpc_personal_asignado.module';
import { RgpcHasDifmecanModule } from './rgpc_has_difmecan/rgpc_has_difmecan.module';
import { RgFotograficoModule } from './rg_fotografico/rg_fotografico.module';
import { RgiSocioAmbientalModule } from './rgi_socio_ambiental/rgi_socio_ambiental.module';
import { RgisaPlanAccionModule } from './rgisa_plan_accion/rgisa_plan_accion.module';
import { RgisaHasIisocialModule } from './rgisa_has_iisocial/rgisa_has_iisocial.module';
import { ComunidadSectorModule } from './comunidad_sector/comunidad_sector.module';
import { RgpcBeneficiarioModule } from './rgpc_beneficiario/rgpc_beneficiario.module';


@Module({
  imports: [TasksModule, PersonaModule, PlanAccionModule, UserModule, ComparecienteModule,PreguntaModule,
     ProyectoModule, EncuestaModule, ProvinciaModule,CantonModule, ParroquiaModule, ComunidadModule, 
      ActaCompromisoModule, AcHasPersonaModule,AudPublicaModule, CentroInfPublicaModule, CriterioComunidadModule,
       DifunsionMecanismoModule, EncuestaPreguntaModule, InspeccionSocialModule,ItemIsModule, MecPartCiudadanaModule,
        OpcionModule, PreguntaOpcionModule, QuejaReclamoModule, RgPartCiudadanaModule,RgpcCriterioComunidadModule,
         RgpcMecanismoPartciudModule, RgpcPersonalAsignadoModule, RgpcHasDifmecanModule,RgFotograficoModule,
          RgiSocioAmbientalModule, RgisaPlanAccionModule, RgisaHasIisocialModule, ComunidadSectorModule, RgpcBeneficiarioModule],
  providers: [],
  controllers: [],
  // controllers: [AppController],
  // providers: [AppService],
})
export class AppModule {}
