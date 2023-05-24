import {Injectable} from "@angular/core";
import {environment} from "../../../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {KubernetesSupportService} from "../../support/kubernetes.support.service";
import {KubernetesWorkloadDeploymentList} from "./kubernetes.workload.deployment.list";

@Injectable()
export class KubernetesWorkloadDeploymentService extends KubernetesSupportService<KubernetesWorkloadDeploymentList> {

  constructor(http: HttpClient) {
    super(http);
  }

  getUrl(): string {
    return `${environment.system_v1}/kubernetes/deployment`;
  }

}
