import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {KubernetesRoutingModule} from "./kubernetes-routing.module";
import {KubernetesHomeComponent} from "./home/kubernetes.home.component";
import {KubernetesClusterService} from "./cluster/kubernetes.cluster.service";
import {MatButtonModule} from "@angular/material/button";
import {TableModule} from "primeng/table";
import {MatIconModule} from "@angular/material/icon";
import {FormContainerModule} from "../../components/form/container/form.container.module";
import {LoaderModule} from "../../components/loader/loader.module";
import {FormsModule} from "@angular/forms";
import {KubernetesWorkloadPodModule} from "./workload/pod/kubernetes.workload.pod.module";
import {CrudListModule} from "../../components/crud/list/crud.list.module";
import {KubernetesTerminalModule} from "./terminal/kubernetes.terminal.module";
import {KubernetesClusterGuard} from "./guard/kubernetes.cluster.guard";
import {KubernetesCatalogModule} from "./catalog/kubernetes.catalog.module";
import {KubernetesClusterModule} from "./cluster/kubernetes.cluster.module";
import {MatMenuModule} from "@angular/material/menu";
import {KubernetesConfigConfigMapModule} from "./config/config-map/kubernetes.config.config-map.module";
import {KubernetesWorkloadReplicaSetModule} from "./workload/replica-set/kubernetes.workload.replica-set.module";
import {KubernetesWorkloadStatefulSetModule} from "./workload/stateful-set/kubernetes.workload.stateful-set.module";
import {KubernetesWorkloadDaemonSetModule} from "./workload/daemon-set/kubernetes.workload.daemon-set.module";
import {KubernetesWorkloadCronJobModule} from "./workload/cron-job/kubernetes.workload.cron-job.module";
import {KubernetesWorkloadJobModule} from "./workload/job/kubernetes.workload.job.module";

@NgModule({
  declarations: [
    KubernetesHomeComponent
  ],
  exports: [
    KubernetesHomeComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    TableModule,
    MatMenuModule,
    MatIconModule,
    FormContainerModule,
    LoaderModule,
    FormsModule,
    KubernetesWorkloadPodModule,
    CrudListModule,
    KubernetesCatalogModule,
    KubernetesClusterModule,
    KubernetesRoutingModule,
    KubernetesTerminalModule,
    KubernetesConfigConfigMapModule,
    KubernetesWorkloadReplicaSetModule,
    KubernetesWorkloadStatefulSetModule,
    KubernetesWorkloadDaemonSetModule,
    KubernetesWorkloadCronJobModule,
    KubernetesWorkloadJobModule
  ],
  providers: [
    KubernetesClusterService,
    KubernetesClusterGuard
  ]
})
export class KubernetesModule {

}
