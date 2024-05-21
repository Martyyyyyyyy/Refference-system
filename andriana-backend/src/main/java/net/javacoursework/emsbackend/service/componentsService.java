package net.javacoursework.emsbackend.service;

import net.javacoursework.emsbackend.dto.componentsDto;

import java.util.List;

public interface componentsService {
    componentsDto createComponent(componentsDto componentDto);

    componentsDto getComponentById(Long componentId);

    List<componentsDto> getAllComponents();

    componentsDto updateComponent(Long componentId, componentsDto updatedComponent);

    void deleteComponent(Long componentId);

}
