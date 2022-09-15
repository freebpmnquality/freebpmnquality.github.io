class EtherBPMNUtil {

    static makeValue(modelQuality, modelCost) {
        const X = modelCost;
        const Y = modelQuality;

        return X * Y / 100;
    }

    static evaluateModel(bpmnXML) {
        // Validate model
        const warningsList = QualiBPMNUtilPlainOld.analyzeBPMN(bpmnXML);

        // Estimate model cost
        let processLength = 0;
        let totalDefects = 0;

        for (const i in warningsList) {
            processLength += warningsList[i].data.processLength();
            totalDefects += warningsList[i].data.countDefects();
        }

        const modelQuality = (1 - (totalDefects / processLength)) * 100;

        const modelPersonHours = FinBPMNUtil.calculateEfforts(processLength);

        const modelCost = modelPersonHours * FinBPMNUtil.HOURLY_WAGE;

        const modelValue = EtherBPMNUtil.makeValue(modelQuality, modelCost);

        return {
            quality: modelQuality,
            efforts: modelPersonHours,
            cost: modelCost,
            value: modelValue
        }
    }
}