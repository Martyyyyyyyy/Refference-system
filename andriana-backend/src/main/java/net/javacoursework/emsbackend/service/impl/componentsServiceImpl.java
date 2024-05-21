package net.javacoursework.emsbackend.service.impl;

import lombok.AllArgsConstructor;
import net.javacoursework.emsbackend.dto.componentsDto;
import net.javacoursework.emsbackend.exception.ResourceNotFoundException;
import net.javacoursework.emsbackend.repository.componentsRepository;
import net.javacoursework.emsbackend.service.componentsService;
import net.javacoursework.emsbackend.mapper.componentsMapper;
import org.springframework.stereotype.Service;
import net.javacoursework.emsbackend.entity.components;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class componentsServiceImpl implements componentsService {

    private componentsRepository componentRepository;

    @Override
    public componentsDto createComponent(componentsDto componentDto) {
        components component = componentsMapper.mapTocomponents(componentDto);
        components savedComponent = componentRepository.save(component);
        return  componentsMapper.mapTocomponentsDto(savedComponent);
    }

    @Override
    public componentsDto getComponentById(Long componentId) {
        components component = componentRepository.findById(componentId)
                .orElseThrow(() -> new ResourceNotFoundException("Такого компонента не існує по цьому id: " + componentId));
        return  componentsMapper.mapTocomponentsDto(component);
    }

    @Override
    public List<componentsDto> getAllComponents() {
        List<components> components = componentRepository.findAll();
        return components.stream().map(componentsMapper::mapTocomponentsDto)
                .collect(Collectors.toList());
    }

    @Override
    public componentsDto updateComponent(Long componentId, componentsDto updatedComponent) {
        components component = componentRepository.findById(componentId).orElseThrow(
                () -> new ResourceNotFoundException("Такого компонента не існує по цьому id: " + componentId)
        );
        component.setType(updatedComponent.getType());
        component.setInventory_number(updatedComponent.getInventory_number());
        component.setManufacturer(updatedComponent.getManufacturer());
        component.setFree(updatedComponent.getFree());

        components updatedComponentObj = componentRepository.save(component);
        return componentsMapper.mapTocomponentsDto(updatedComponentObj);
    }

    @Override
    public void deleteComponent(Long componentId) {
        components component = componentRepository.findById(componentId).orElseThrow(
                () -> new ResourceNotFoundException("Такого компонента не існує по цьому id: " + componentId)
        );

        componentRepository.deleteById(componentId);
    }
}
