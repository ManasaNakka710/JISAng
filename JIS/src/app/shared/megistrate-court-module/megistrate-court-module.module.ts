import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MagistrateCourtComponent } from './magistrate-court/magistrate-court.component';
import { MobileCourtComponent } from './mobile-court/mobile-court.component';
import { SmallClaimCourtComponent } from './small-claim-court/small-claim-court.component';



@NgModule({
  declarations: [MagistrateCourtComponent, MobileCourtComponent, SmallClaimCourtComponent],
  imports: [
    CommonModule
  ]
})
export class MegistrateCourtModuleModule { }
