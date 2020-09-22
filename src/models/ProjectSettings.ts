// tslint:disable: max-classes-per-file

class Customizations {
  mainColor: string;
  buttonColor: string;
  fontFamily: string;

  constructor(obj: any) {
    this.mainColor = obj.main_color;
    this.buttonColor = obj.button_color;
    this.fontFamily = obj.font_family;
  }
}

class VerificationStep {
  step: string;
  resourceTypes: string[];
  constructor(obj: any) {
    this.step = obj.step;
    this.resourceTypes = obj.resource_types;
  }
}

export class ProjectSettings {
  id: string;
  slug: string;
  environment: string;
  organization: string;
  customizations: Customizations;
  verificationSteps: VerificationStep[];

  constructor(obj: any) {
    this.id = obj.id;
    this.slug = obj.slug;
    this.environment = obj.environment;
    this.organization = obj.organization;
    this.customizations = new Customizations(obj.customizations || {});
    this.verificationSteps = (obj.verification_steps || []).map(
      (step: any) => new VerificationStep(step),
    );
  }
}
