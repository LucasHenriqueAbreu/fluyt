import {Component, OnInit} from "@angular/core";
import {KubernetesWorkloadPodService} from "../kubernetes.workload.pod.service";
import {HeaderService} from "../../../../../components/header/header.service";
import {KubernetesWorkloadPodList} from "../kubernetes.workload.pod.list";
import {FooterService} from "../../../../../components/footer/footer.service";
import {KubernetesTerminalComponent} from "../../../terminal/kubernetes.terminal.component";
import {KubernetesSupportList} from "../../../support/kubernetes.support.list";
import {Header} from "../../../../../components/header/header";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-kubernetes-workload-pod-list',
  templateUrl: './kubernetes.workload.pod.list.component.html'
})
export class KubernetesWorkloadPodListComponent extends KubernetesSupportList<KubernetesWorkloadPodList> implements OnInit {

  constructor(private podService: KubernetesWorkloadPodService,
              headerService: HeaderService,
              private footerService: FooterService,
              private activatedRoute: ActivatedRoute) {
    super(headerService, podService);
  }

  getHeader(): Header {
    return {
      name: 'Pod list',
      breadcrumbs: [
        {
          label: 'Pods',
          link: '/kubernetes/pods'
        }
      ]
    };
  }

  openTerminal(pod: KubernetesWorkloadPodList): void {
    this.footerService.add({
      type: KubernetesTerminalComponent,
      title: 'Terminal',
      data: {
        cluster: this.activatedRoute.snapshot.queryParams['cluster'],
        pod: pod
      },
      icon: 'pi-desktop'
    })
  }

}
